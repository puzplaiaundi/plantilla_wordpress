<?php
/*
Template Name: Ejercicios JavaScript tema 4
*/

get_header();

$ejercicio_seleccionado = tema_plaiaundi_obtener_ejercicio_seleccionado();

$titulos_ejercicios = array(
    'Objetos y métodos',
    'El valor de this',
    'Referencias y copias',
    'Clases e instancias',
    'Stock privado y validación',
    'Herencia y polimorfismo',
    'Módulos ES',
    'Catálogo modular',
);
?>

<main class="ejercicios">
    <h2><?php the_title(); ?></h2>
    <p>Tema 4 · Objetos, clases y módulos ES</p>
    <p>Selecciona un ejercicio y abre la consola del navegador.</p>

    <nav aria-label="Ejercicios de JavaScript">
        <ul class="ejercicios__lista">
            <?php foreach ($titulos_ejercicios as $indice => $titulo) { ?>
                <?php $numero = $indice + 1; ?>
                <li>
                    <a
                        class="ejercicios__enlace"
                        href="<?php echo esc_url(add_query_arg('ejercicio', $numero, get_permalink())); ?>"
                        <?php if ($ejercicio_seleccionado === $numero) { ?>
                            aria-current="page"
                        <?php } ?>
                    >
                        <?php echo esc_html(sprintf('%02d - %s', $numero, $titulo)); ?>
                    </a>
                </li>
            <?php } ?>
        </ul>
    </nav>
</main>

<?php get_footer(); ?>