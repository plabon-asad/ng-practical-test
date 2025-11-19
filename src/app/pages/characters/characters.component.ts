import {
  Component,
  inject,
  signal,
  effect, OnInit,
} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PaginationModule} from 'ngx-bootstrap/pagination';
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  tap,
} from 'rxjs';
import {CharacterService} from '../../services/character.service';
import {Character} from '../../model/icharacter';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [ReactiveFormsModule, PaginationModule, FormsModule],
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit{
  private service = inject(CharacterService);

  searchControl = new FormControl('', {nonNullable: true});

  characters = signal<Character[]>([]);
  totalItems = signal(0);
  currentPage = signal(1);
  loading = signal(false);
  noResults = signal(false);

  constructor() {
    // Page change effect
    effect(() => {
      const page = this.currentPage();
      const term = this.searchControl.value;
      this.fetch(term, page).subscribe();
    });
  }

  ngOnInit() {
    // Search with debounce
    this.searchControl.valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),
        tap(() => this.currentPage.set(1)), // reset page on search
        switchMap((term) => this.fetch(term, 1))
      ).subscribe();
  }

  fetch(term: string, page: number) {
    this.loading.set(true);

    return this.service.fetchCharacters(page, term).pipe(
      tap({
        next: (resp) => {
          this.characters.set(resp.results);
          this.totalItems.set(resp.info.count);
          this.noResults.set(resp.results.length === 0);
          this.loading.set(false);
        },
        error: () => {
          // Rick & Morty API returns 404 for no results
          this.characters.set([]);
          this.noResults.set(true);
          this.totalItems.set(0);
          this.loading.set(false);
        },
      })
    );
  }

  pageChanged(evt: any) {
    this.currentPage.set(evt.page);
  }

  // here's the task:
  // the page will initially call an api to load the character list
  // the data is paginated, so when the page is changed, you need to load the data of that page
  // when the user types anything in the search field, it also needs to search, the page needs to be resetted to 1
  // search requests should be debounced, and should cancel any previous pending request

  // the api url is:
  // https://rickandmortyapi.com/api/character
  // the search and page data needs to be send in the query params
  // it will be seomthing like this: { name: "searchedValue" or null, page: pageValue }
}
