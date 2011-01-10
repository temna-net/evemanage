package lv.odylab.evemanage.client.rpc.action.quickcalculator;

import lv.odylab.evemanage.client.rpc.action.Response;
import lv.odylab.evemanage.client.rpc.dto.eve.RegionDto;
import lv.odylab.evemanage.client.rpc.dto.user.PriceFetchOptionDto;

import java.util.List;

public class QuickCalculatorTabFirstLoadActionResponse implements Response {
    private List<RegionDto> regions;
    private RegionDto preferredRegion;
    private List<PriceFetchOptionDto> priceFetchOptions;
    private PriceFetchOptionDto preferredPriceFetchOption;

    public List<RegionDto> getRegions() {
        return regions;
    }

    public void setRegions(List<RegionDto> regions) {
        this.regions = regions;
    }

    public RegionDto getPreferredRegion() {
        return preferredRegion;
    }

    public void setPreferredRegion(RegionDto preferredRegion) {
        this.preferredRegion = preferredRegion;
    }

    public List<PriceFetchOptionDto> getPriceFetchOptions() {
        return priceFetchOptions;
    }

    public void setPriceFetchOptions(List<PriceFetchOptionDto> priceFetchOptions) {
        this.priceFetchOptions = priceFetchOptions;
    }

    public PriceFetchOptionDto getPreferredPriceFetchOption() {
        return preferredPriceFetchOption;
    }

    public void setPreferredPriceFetchOption(PriceFetchOptionDto preferredPriceFetchOption) {
        this.preferredPriceFetchOption = preferredPriceFetchOption;
    }
}