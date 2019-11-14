var privacy_notice = Vue.component('privacy-notice', {
    template: `
        <div>
            <navbar></navbar>
            <slider></slider>
            <div class="slider-separator"></div>
            <div class="about-us">
                <div>
                    <h1>Aviso de privacidad</h1>
                    <p class="privacy">
                    <table border="0" style="text-align: left;color: #000000;font-family: Arial, Helvetica, sans-serif;font-weight: lighter;font-size: 13px;width: 100%;padding: 0;border: none;border-collapse:collapse;">
                        <tbody>
                            <tr>
                                <td style="text-align: left;color: #000000;font-family: Arial, Helvetica, sans-serif;font-weight: lighter;font-size: 13px;">
                                    Carlos Alejandro Garduño Sánchez , mejor conocido como Busgarage , con domicilio en calle Islote Mz 16 Lt 5, colonia Las Águilas, ciudad Ciudad de México, municipio o delegación Álvaro Obregón, c.p. 01710, en la entidad de Ciudad de México, país México
                                    , y portal de internet https://busgarage.com.mx/ , es el responsable del uso y protección de sus datos personales, y al respecto le informamos lo siguiente:
                                </td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                            </tr>
                    
                            <tr>
                                <td style="text-align: left;color: #000000;font-family: Arial, Helvetica, sans-serif;font-weight: bold;font-size: 13px;">
                                    ¿Para qué fines utilizaremos sus datos personales?
                                </td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td style="text-align: left;color: #000000;font-family: Arial, Helvetica, sans-serif;font-weight: lighter;font-size: 13px;">
                                    Los datos personales que recabamos de usted, los utilizaremos para las siguientes finalidades que son necesarias para el servicio que solicita:
                                    <!--[Listado de finalidades en las que el responsable haya indicado que son necesarias para la relación jurídica con el titular en las preguntas 1 y 2 de la Sección IV].-->
                                </td>
                            </tr>
                    
                            <tr>
                                <td style="text-align: left;color: #000000;font-family: Arial, Helvetica, sans-serif;font-weight: lighter;font-size: 13px;">
                                    <ul></ul>
                                </td>
                            </tr>
                            <tr>
                                <td style="text-align: left;color: #000000;font-family: Arial, Helvetica, sans-serif;font-weight: lighter;font-size: 13px;">
                                    <br>De manera adicional, utilizaremos su información personal para las siguientes finalidades secundarias que <b>no son necesarias</b> para el servicio solicitado, pero que nos permiten y facilitan brindarle una mejor atención:<br>
                                    <!--[Listado de finalidades en las que el responsable haya indicado que NO son necesarias para la relación jurídica con el titular en las preguntas 1 y 2 de la Sección IV]. -->
                                </td>
                            </tr>
                    
                            <tr>
                                <td style="text-align: left;color: #000000;font-family: Arial, Helvetica, sans-serif;font-weight: lighter;font-size: 13px;">
                                    <ul>
                                        <li>Enviar promocioes</li>
                                        <li>Notificar nuevos productos</li>
                                        <li>Notificar Estatus de envío</li>
                                        <li>Notificar Estatus de pago</li>
                                        <li>Mercadotecnia o publicitaria</li>
                                        <li>Prospección comercial</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td style="text-align: left;color: #000000;font-family: Arial, Helvetica, sans-serif;font-weight: lighter;font-size: 13px;">
                                    En caso de que no desee que sus datos personales se utilicen para estos fines secundarios, indíquelo a continuación:<br><br>No consiento que mis datos personales se utilicen para los siguientes fines:<br><br>
                                    <font size="4">[&nbsp;&nbsp;]</font>&nbsp;Enviar promocioes<br>
                                    <font size="4">[&nbsp;&nbsp;]</font>&nbsp;Notificar nuevos productos<br>
                                    <font size="4">[&nbsp;&nbsp;]</font>&nbsp;Notificar Estatus de envío<br>
                                    <font size="4">[&nbsp;&nbsp;]</font>&nbsp;Notificar Estatus de pago<br>
                                    <font size="4">[&nbsp;&nbsp;]&nbsp;</font>Mercadotecnia o publicitaria<br>
                                    <font size="4">[&nbsp;&nbsp;]&nbsp;</font>Prospección comercial</td>
                            </tr>
                    
                            <!--OK-->
                    
                            <tr>
                                <td style="text-align: left;color: #000000;font-family: Arial, Helvetica, sans-serif;font-weight: lighter;font-size: 13px;">
                                    <br>La negativa para el uso de sus datos personales para estas finalidades no podrá ser un motivo para que le neguemos los servicios y productos que solicita o contrata con nosotros.
                                    <!--<b>En caso de que no manifieste su negativa, se entenderá que autoriza el uso de su 
                                        información personal para dichos fines.</b>--><br>
                                </td>
                            </tr>
                            <!-- FIN DE SECCION -->
                            <tr>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td style="text-align: left;color: #000000;font-family: Arial, Helvetica, sans-serif;font-weight: bold;font-size: 13px;">
                                    ¿Qué datos personales utilizaremos para estos fines?
                                </td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td style="text-align: left;color: #000000;font-family: Arial, Helvetica, sans-serif;font-weight: lighter;font-size: 13px;">
                                    Para llevar a cabo las finalidades descritas en el presente aviso de privacidad, utilizaremos los siguientes datos personales:
                                    <!--[listado de datos personales o sus categorías, según lo indicado por el responsable en las preguntas 2 y 3 de la Sección V].-->
                                    <!--seccion 5, pregunta 2-->
                                    <br>
                                    <ul>
                                        <!--seccion 5, pregunta 3-->
                                        <li>Datos de identificación</li>
                                        <li>Datos de contacto</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <table align="center" style="text-align: left;color: #000000;font-family: Arial, Helvetica, sans-serif;font-weight: lighter;font-size: 13px;padding: 0;width: 100%;border-collapse:collapse;" border="0">
                        <tbody>
                            <tr>
                                <td style="text-align: left;color: #000000;font-family: Arial, Helvetica, sans-serif;font-weight: bold;font-size: 13px;">
                                    <br>¿Cómo puede acceder, rectificar o cancelar sus datos personales, u oponerse a su uso?
                                </td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td style="text-align: left;color: #000000;font-family: Arial, Helvetica, sans-serif;font-weight: lighter;font-size: 13px;">
                                    Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada,
                                    sea inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada adecuadamente (Cancelación); así como oponerse al uso de sus datos personales para
                                    fines específicos (Oposición). Estos derechos se conocen como derechos ARCO.</td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td style="text-align: left;color: #000000;font-family: Arial, Helvetica, sans-serif;font-weight: lighter;font-size: 13px;">
                                    Para el ejercicio de cualquiera de los derechos ARCO, usted deberá presentar la solicitud respectiva a través del siguiente medio: <br><br>
                                    <!--[Descripción del medio que haya indicado el responsable en la pregunta 1 de la Sección VII].-->
                                    Enviando un correo electrónico a support@busgarage.com.mx </td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <!--[El siguiente texto aparecerá en caso de que el responsable haya elegido la primera opción de la pregunta 2 de la Sección VII]:-->
                    <table align="left" style="text-align: left;color: #000000;font-family: Arial, Helvetica, sans-serif;font-weight: lighter;font-size: 13px;padding: 0;width: 100%;border-collapse:collapse;" border="0">
                        <tbody>
                            <tr>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td style="text-align: left;color: #000000;font-family: Arial, Helvetica, sans-serif;font-weight: lighter;font-size: 13px;">
                                    Con relación al procedimiento y requisitos para el ejercicio de sus derechos ARCO, le informamos lo siguiente:<br><br> </td>
                            </tr>
                            <tr>
                                <td style="text-align: left;color: #000000;font-family: Arial, Helvetica, sans-serif;font-weight: lighter;font-size: 13px;">
                                    <!--[Información que haya proporcionado el responsable en la pregunta 3 de la Sección VII]-->
                                    a) ¿A través de qué medios pueden acreditar su identidad el titular y, en su caso, su representante, así como la personalidad este último?<br> Enviando un correo electrónico a support@busgarage.com.mx</td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td style="text-align: left;color: #000000;font-family: Arial, Helvetica, sans-serif;font-weight: lighter;font-size: 13px;">
                                    b) ¿Qué información y/o documentación deberá contener la solicitud?<br> Nombre completo y teléfono de contacto</td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td style="text-align: left;color: #000000;font-family: Arial, Helvetica, sans-serif;font-weight: lighter;font-size: 13px;">
                                    c) ¿En cuántos días le daremos respuesta a su solicitud?<br> De 3 a 5 diías hábiles</td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td style="text-align: left;color: #000000;font-family: Arial, Helvetica, sans-serif;font-weight: lighter;font-size: 13px;">
                                    d) ¿Por qué medio le comunicaremos la respuesta a su solicitud?<br> Correo electrónico</td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td style="text-align: left;color: #000000;font-family: Arial, Helvetica, sans-serif;font-weight: lighter;font-size: 13px;">
                                    e) ¿En qué medios se pueden reproducir los datos personales que, en su caso, solicite?<br> Por correo electrónico</td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                            </tr>
                        </tbody>
                    </table>
                    
                    <table align="left" style="text-align: left;color: #000000;font-family: Arial, Helvetica, sans-serif;font-weight: lighter;font-size: 13px;padding: 0;width: 100%;border-collapse:collapse;" border="0">
                        <tbody>
                            <tr>
                                <td style="text-align: left;color: #000000;font-family: Arial, Helvetica, sans-serif;font-weight: lighter;font-size: 13px;">
                                    <br>Los datos de contacto de la persona o departamento de datos personales, que está a cargo de dar trámite a las solicitudes de derechos ARCO, son los siguientes: <br></td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                            </tr>
                            <!--[Datos proporcionados en la pregunta 5 de la Sección VII]-->
                            <tr>
                                <td style="text-align: left;color: #000000;font-family: Arial, Helvetica, sans-serif;font-weight: lighter;font-size: 13px;">
                                    a) Nombre de la persona o departamento de datos personales: Carlos Alejandro Garduño Sánchez<br>
                                    <!--b) Domicilio:-->
                                    b) Domicilio: calle Islote Mz 16 Lt 5, colonia Las Águilas, ciudad Ciudad de México, municipio o delegación Álvaro Obregón, c.p. 01710, en la entidad de Ciudad de México, país México<br> c) Correo electrónico: support@busgarage.com.mx<br>d)
                                    Número telefónico: 5523037185<br>
                                    <br>
                                    <text style="font-weight:bold;">Usted puede revocar su consentimiento para el uso de sus datos personales</text><br><br> Usted puede revocar el consentimiento que, en su caso, nos haya otorgado para el tratamiento de sus datos personales.
                                    Sin embargo, es importante que tenga en cuenta que no en todos los casos podremos atender su solicitud o concluir el uso de forma inmediata, ya que es posible que por alguna obligación legal requiramos seguir tratando sus datos personales.
                                    Asimismo, usted deberá considerar que para ciertos fines, la revocación de su consentimiento implicará que no le podamos seguir prestando el servicio que nos solicitó, o la conclusión de su relación con nosotros.<br><br> Para revocar su
                                    consentimiento deberá presentar su solicitud a través del siguiente medio: <br><br>
                                    <!--[Describir los medios indicados en la pregunta 1 de la Sección VIII].-->
                                    Por correo electrónico
                                    <!--[El siguiente texto aparecerá en caso de que el responsable haya elegido la primera opción de la pregunta 2 de la Sección VIII]:-->
                                </td>
                            </tr>
                            <tr>
                                <td style="text-align: left;color: #000000;font-family: Arial, Helvetica, sans-serif;font-weight: lighter;font-size: 13px;">
                                    <br>Con relación al procedimiento y requisitos para la revocación de su consentimiento, le informamos lo siguiente: <br><br>
                                    <!--[Información que haya proporcionado el responsable en la pregunta 3 de la Sección VII]-->
                                    a) ¿A través de qué medios pueden acreditar su identidad el titular y, en su caso, su representante, así como la personalidad este último?<br> Correo electrónico: support@busgarage.com.mx<br><br> b) ¿Qué información y/o documentación deberá
                                    contener la solicitud?<br> Nombre completo y teléfono de contacto<br><br> c) ¿En cuántos días le daremos respuesta a su solicitud?<br> De 3 a 5 días hábiles<br><br> d) ¿Por qué medio le comunicaremos la respuesta a su solicitud?<br> Por
                                    correo electrónico<br><br>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <table align="center" style="text-align: left;color: #000000;font-family: Arial, Helvetica, sans-serif;font-weight: lighter;font-size: 13px;padding: 0;width: 100%;border-collapse:collapse;" border="0">
                        <tbody>
                            <tr>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td style="text-align: left;color: #000000;font-family: Arial, Helvetica, sans-serif;font-weight: bold;font-size: 13px;">
                                    ¿Cómo puede limitar el uso o divulgación de su información personal?
                                </td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                            </tr>
                            <!--[Esta sección sólo aparecerá en el caso de que el responsable haya respondido que sí en la pregunta 1 de la Sección IX, o bien, haya señalado que le aplica algunos de los registros de la pregunta 3 de esa sección]-->
                            <tr>
                                <td style="text-align: left;color: #000000;font-family: Arial, Helvetica, sans-serif;font-weight: lighter;font-size: 13px;">
                                    Con objeto de que usted pueda limitar el uso y divulgación de su información personal, le ofrecemos los siguientes medios:<br><br> Inscripción a listao de exclusión<br><br> De manera adicional, le informamos que contamos con los siguientes
                                    listados de exclusión, en los cuales podrá registrarse para que sus datos personales no sean tratados para ciertos fines: <br>
                                </td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                            </tr>
                        </tbody>
                    </table>
                    <!--[Información proporcionada en la pregunta 5 de la Sección IX]-->
                    
                    <table align="center" style="text-align: left;color: #000000;font-family: Arial, Helvetica, sans-serif;font-weight: lighter;font-size: 13px;padding: 0;width: 100%;border-collapse:collapse;" border="1">
                        <tbody>
                            <tr>
                                <td style="text-align: left;color: #000000;font-family: Arial, Helvetica, sans-serif;font-weight: bold;font-size: 13px;">
                                    Nombre del listado
                                </td>
                                <td style="text-align: left;color: #000000;font-family: Arial, Helvetica, sans-serif;font-weight: bold;font-size: 13px;">
                                    Finalidad para las que aplica
                                </td>
                                <td style="text-align: left;color: #000000;font-family: Arial, Helvetica, sans-serif;font-weight: bold;font-size: 13px;">
                                    Medio para obtener mayor información
                                </td>
                            </tr>
                            <tr>
                                <td>Evitar envío de publicidad</td>
                                <td>Evitar envío de cualquier publicidad</td>
                                <td>Correo electrónico a support@busgarage.com.mx</td>
                            </tr>
                        </tbody>
                    </table>
                    <br>
                    <table align="center" style="text-align: left;color: #000000;font-family: Arial, Helvetica, sans-serif;font-weight: lighter;font-size: 13px;padding: 0;width: 100%;border-collapse:collapse;" border="0">
                        <tbody>
                            <tr>
                                <td style="text-align: left;color: #000000;font-family: Arial, Helvetica, sans-serif;font-weight: lighter;font-size: 13px;">
                                    Asimismo, usted se podrá inscribir a los siguientes registros, en caso de que no desee obtener publicidad de nuestra parte: <br>
                                    <!--[Esta parte aparecerá sólo en caso de que el responsable haya seleccionado al menos uno de los registros de la pregunta 3 de la Sección IX, y el contenido dependerá los registros seleccionados]-->
                                    <!--[información que haya proporcionado el responsable en la pregunta 2 de la Sección IX]-->
                                    <br> Registro Público para Evitar Publicidad, para mayor información consulte el portal de internet de la PROFECO
                                    <br><br>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <!-- SECCION 10 -->
                    <table align="center" style="text-align: left;color: #000000;font-family: Arial, Helvetica, sans-serif;font-weight: lighter;font-size: 13px;padding: 0;width: 100%;border-collapse:collapse;" border="0">
                        <tbody>
                            <tr>
                                <td style="text-align: left;color: #000000;font-family: Arial, Helvetica, sans-serif;font-weight: lighter;font-size: 13px;">
                                    <b><strong>El uso de tecnologías de rastreo en nuestro portal de internet</strong></b><br><br>
                                    <!--[Esta sección aparecerá sólo en el caso de que el responsable haya respondido que sí en las preguntas 1 y 2 de la Sección X]-->
                                    Le informamos que en nuestra página de internet utilizamos cookies, web beacons u otras tecnologías, a través de las cuales es posible monitorear su comportamiento como usuario de internet, así como brindarle un mejor servicio y experiencia al navegar
                                    en nuestra página. Los datos personales que recabamos a través de estas tecnologías, los utilizaremos para los siguientes fines:<br>
                                    <!--[Finalidades informadas en el inciso a la pregunta.-->
                                    <br>Envío de publicidad
                                    <br><br>Los datos personales que obtenemos de estas tecnologías de rastreo son los siguientes:<br>
                                    <!--[datos personales indicados en la pregunta 2 de la Sección X]. -->
                                    <!--seccion 5, pregunta 3-->
                                    <br>Identificadores, nombre de usuario y contraseñas de una sesión <br>Tipo de navegador del usuario <br>Tipo de sistema operativo del usuario <br>Fecha y hora del inicio y final de una sesión de un usuario
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <table align="left" style="text-align: left;color: #000000;font-family: Arial, Helvetica, sans-serif;font-weight: lighter;font-size: 13px;padding: 0;width: 100%;border-collapse:collapse;" border="0">
                    </table>
                    
                    <!-- SECCON 11-->
                    <table align="left" style="text-align: left;color: #000000;font-family: Arial, Helvetica, sans-serif;font-weight: lighter;font-size: 13px;padding: 0;width: 100%;border-collapse:collapse;" border="0">
                        <tbody>
                            <tr>
                                <td style="text-align: left;color: #000000;font-family: Arial, Helvetica, sans-serif;font-weight: bold;font-size: 13px;width: 100%">
                                    <br>¿Cómo puede conocer los cambios en este aviso de privacidad?</td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td style="text-align: left;color: #000000;font-family: Arial, Helvetica, sans-serif;font-weight: lighter;font-size: 13px;">
                                    El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos requerimientos legales; de nuestras propias necesidades por los productos o servicios que ofrecemos; de nuestras prácticas de privacidad; de cambios
                                    en nuestro modelo de negocio, o por otras causas.<br>
                                    <br>Nos comprometemos a mantenerlo informado sobre los cambios que pueda sufrir el presente aviso de privacidad, a través de:
                                    <!--[descripción del medio informado en la pregunta 1 de la Sección XI].-->
                                    Por correo electrónico.
                                    <br><br>El procedimiento a través del cual se llevarán a cabo las notificaciones sobre cambios o actualizaciones al presente aviso de privacidad es el siguiente: <br><br>Envío de correo electrónico a nuestra lista de contactos
                                    <!--[descripción del procedimiento que se haya descrito en la pregunta 3 de la Sección XI].-->
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <!-- SECCON 13-->
                    <table align="left" style="text-align: left;color: #000000;font-family: Arial, Helvetica, sans-serif;font-weight: lighter;font-size: 13px;padding: 0;width: 100%;border-collapse:collapse;" border="0">
                        <tbody>
                            <tr>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td style="color: #000000;font-family: Arial, Helvetica, sans-serif;font-weight: bold;font-size: 13px;">
                                    Su consentimiento para el tratamiento de sus datos personales<br><br>
                                    <!--[esta sección sólo aparecerá en el caso de que el responsable haya respondido que sí en la pregunta 2 de la Sección XIII, y el contenido dependerá del tipo de consentimiento que haya indicado en la pregunta 3 de la misma sección]-->
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <table align="center" style="text-align: left;color: #000000;font-family: Arial, Helvetica, sans-serif;font-weight: lighter;font-size: 13px;padding: 0;width: 100%;border-collapse:collapse;" border="0">
                        <!--[Consentimiento expreso]-->
                        <tbody>
                            <tr>
                                <td style="text-align: left;color: #000000;font-family: Arial, Helvetica, sans-serif;font-weight: lighter;font-size: 13px;">
                                    <!--Expreso<br>-->
                                    Consiento que mis datos personales sean tratados de conformidad con los términos y condiciones informados en el presente aviso de privacidad.<b>[&nbsp;&nbsp;]</b>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <table width="100%">
                        <tbody>
                            <tr>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td style="text-align: right;color: #000000;font-family: Arial, Helvetica, sans-serif;font-weight: lighter;font-size: 13px;">
                                    Última actualización: 14/11/2019 </td>
                            </tr>
                        </tbody>
                    </table>  
                    </p>
                </div>
            </div>
        </div>
    `
});

export default privacy_notice;