UIK.templates = {};
UIK.templates['uikPopupTemplate'] = Mustache.compile('<div id="stop-popup" class="{{css}} loader"></div>');
UIK.templates['userLogsTemplate'] = Mustache.compile('<table class="table table-striped logs"> <caption>Общая статистика</caption> <tr> <th>Показатель</th> <th>Значение</th> </tr> <tr> <td>Всего УИКов</td> <td class="stop">{{count_all}}</td> </tr> <tr> <td>Отредактировано УИКов</td> <td class="stop">{{count_editable}}</td> </tr> <tr> <td>Отредактировано, %</td> <td class="stop">{{percent}}</td> </tr> </table> <table class="table table-striped logs"> <caption>Статистика по пользователям</caption> <tr> <th>Пользователь</th> <th>Кол-во УИКов</th> </tr> {{#user_logs}} <tr> <td>{{user_name}}</td> <td class="stop">{{count_uiks}}</td> </tr> {{/user_logs}} </table>');
UIK.templates['searchResultsTemplate'] = Mustache.compile('<ul class="{{cssClass}}"> {{#uiks}} <li data-lat={{lat}} data-lon={{lon}} data-id={{id}}> <span>{{name}}</span> {{addr}} <a class="target" title="Перейти к УИКу"></a> {{#isAuth}}<a class="edit" title="Редактировать УИК"></a>{{/isAuth}} </li> {{/uiks}} </ul>');
UIK.templates['uikPopupInfoTemplate'] = Mustache.compile('<table class="table table-striped"> <tr> <td>Номер УИКа</td> <td>{{uik.number_official}}</td> </tr> <tr> <td>ТИК</td> <td>{{tik.name}}</td> </tr> <tr> <td>Регион</td> <td>{{region.name}}</td> </tr> <tr> <td>Адрес голосования</td> <td>{{uik.address_voting}}</td> </tr> <tr> <td>Место помещения голосования</td> <td>{{uik.place_voting}}</td> </tr> <tr> <td>Точность геокодирования</td> <td>{{geo_precision.name_ru}}</td> </tr> <tr> <td>Комментарий</td> <td>{{uik.comment}}</td> </tr> <tr> <td>Проверен</td> <td> {{#uik.is_applied}}Да{{/uik.is_applied}} {{^uik.is_applied}}Нет{{/uik.is_applied}} </td> </tr> {{#isBlocked}} <tr class="block"> {{#isUnBlocked}} <td>Заблокирована вами</td> <td> <button class="btn btn-small btn-primary block" id="unblock" type="button">Разблокировать</button> </td> {{/isUnBlocked}} {{^isUnBlocked}} <td>Заблокировал</td> <td>{{userBlocked}}</td> {{/isUnBlocked}} </tr> {{/isBlocked}} </table> {{#isUserEditor}} <div class="edit"> <button class="btn btn-small btn-primary {{#isBlock}}block{{/isBlock}}" id="edit" type="button" {{#editDenied}}disabled="disabled"{{/editDenied}}>Редактировать</button> </div> {{/isUserEditor}} ');
UIK.templates['osmPopupTemplate'] = Mustache.compile('<div class="osm-popup"> <div class="caption"> <span>{{id}}</span> <a href="{{link}}" target="_blank" title="Посмотреть на OpenStreetMaps" class="osm"></a> </div> <table class="table table-striped"> {{#tags}} <tr> <td>{{key}}</td> <td>{{val}}</td> </tr> {{/tags}} </table> </div>');
UIK.templates['alertsTemplate'] = Mustache.compile('<div id="alert_{{id}}" class="alert alert-{{type}}" style="display: none;"> <button type="button" class="close" data-dismiss="alert">&times;</button> <strong>{{statusText}}</strong> {{text}} </div>');