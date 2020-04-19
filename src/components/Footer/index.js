import React from 'react'
import { FiFacebook, FiInstagram, FiGithub } from 'react-icons/fi'
import { Row, Col } from 'react-flexbox-grid'

import FooterWave from '../../assets/img/misc/footer_wave.png'
import { footerMenu } from '../api/footer'
import styles from './Footer.module.scss'

/**
* @author zilahir
* @function Footer
* */

const Footer = () => {
	const { legalText } = footerMenu.getFooterTexts()[0]
	const { rights } = footerMenu.getFooterTexts()[1]
	return (
		<footer
			className={styles.footerWrapper}
			style={{
				backgroundImage: `url(${FooterWave})`,
			}}
		>
			<div className={styles.content}>
				<Row>
					<Col xs={12} lg={12}>
						<div className={styles.socialContainer}>
							<ul>
								<li>
									<a rel="noopener noreferrer" target="_blank" href="https://github.com">
										<FiGithub size="2em" />
									</a>
								</li>
							</ul>
						</div>
					</Col>
				</Row>
				<Row>
					<Col lg={12} xs={12}>
						<div className={styles.legalContainer}>
							<p className={styles.heart}>
                Feel free to contribute.
              </p>
							<p className={styles.heart}>
									built  with <span aria-label="heart" role="img">❤️</span> <a href="https://rasa.com">Rasa</a>
							</p>
						</div>
					</Col>
				</Row>
			</div>
		</footer>
	)
}


export default Footer
