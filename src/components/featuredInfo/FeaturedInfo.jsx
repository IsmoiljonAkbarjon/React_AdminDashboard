import './feature.css'
import {ArrowDownward, ArrowUpward} from '@material-ui/icons'

export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="fetureTitle">Revan</span>
                <div className="fetureMoneyContain">
                    <span className="featureMoney">$2,415</span>
                    <span className="featureMoneyRate">-11.44<ArrowDownward/> </span>
                </div>
                <span className="featuredSub">Compared to last Month</span>
            </div>
            <div className="featuredItem">
                <span className="fetureTitle">Sales</span>
                <div className="fetureMoneyContain">
                    <span className="featureMoney">$2,415</span>
                    <span className="featureMoneyRate">-11.44<ArrowDownward/> </span>
                </div>
                <span className="featuredSub">Compared to last Month</span>
            </div>
            <div className="featuredItem">
                <span className="fetureTitle">Cost</span>
                <div className="fetureMoneyContain">
                    <span className="featureMoney">$2,415</span>
                    <span className="featureMoneyRate">+14.44<ArrowUpward/> </span>
                </div>
                <span className="featuredSub">Compared to last Month</span>
            </div>
        </div>
    )
}
