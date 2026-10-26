<?php
/* Template Name: Cliente Tema 4 */
get_header();

$ejercicio_seleccionado = tema_plaiaundi_obtener_ejercicio_seleccionado();
$titulos_ejercicios = array(
    'Ejercicio 1',
    'Ejercicio 2',
    'Ejercicio 3',
    'Ejercicio 4'

);
?>

<main>
  <h1>Tema 4 · Objetos, clases y módulos</h1>
  <p>Abre la consola y las herramientas de desarrollo.</p>

    <nav aria-label="Ejercicios de JavaScript">
        <ul class="ejercicios__lista">
            <?php foreach ($titulos_ejercicios as $indice => $titulo) { ?>
                <?php $numero = $indice + 1; ?>
                <li>
                    <a
                        class="ejercicios__enlace"
                        href="<?php echo esc_url(add_query_arg('ejercicio', $numero, get_permalink())); ?>"
                        <?php if ($ejercicio_seleccionado === $numero) { ?>aria-current="page"<?php } ?>
                    >
                        <?php echo esc_html(sprintf('%02d - %s', $numero, $titulo)); ?>
                    </a>
                </li>
            <?php } ?>
        </ul>
    </nav>
</main>

<?php get_footer(); ?>