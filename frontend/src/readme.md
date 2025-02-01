# Struktura plików
Folder sorce `src` zawiera foldery:
- `data`- dane strony
- `components`- komponenty, które prezentują dane
- `interface` - interface pomiędzy danymi a komponentami

Struktura foldery `data` i `components` mają taką samą strukturę jak `interface`, każdy zdefiniowany plik w `interface` ma swojego odpowiednika(implementację) w `data` i `components`. Jest to podniesienie interfejsu do poziomu systemu plików. 

Wewnątrz folderu `interface`(i pozostałych) pliki pogrupowane są w warstwy(stratify design) elementy z pliku z warstwy i-tej mogą odwoływać się do elementów z pliku z warstwy i-1, lub i.

Jakby porównać cały katalog do pliku to można by powiedziec, że :
- `interface` to definicja interfejsu
- `data` dane które implementuja interfejs
- `components` to funkcja która przyjmuje jako argument dane zgodne z interfejsem i zwraca komponenty

```ts
interface Interface{
    ...
}

const data:Interface = {
    ...
}

const components = (data:Interface) => {
    ...
}
```
