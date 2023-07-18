package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDRiskCovPricing.eti;APDRiskCovPricing.eix;APDRiskCovPricing.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class APDRiskCovPricingVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.APDRiskCovPricingVersionList {
  public APDRiskCovPricingVersionListImpl(entity.APDRiskCovPricing base)  {
    super(base);
  }
  
  public APDRiskCovPricingVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.APDRiskCovPricing AsOf(java.util.Date date) {
    return (entity.APDRiskCovPricing)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.APDExposurePrice> ExposurePricesAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.APDRiskCovPricing.EXPOSUREPRICES_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToExposurePrices(entity.APDExposurePrice bean) {
    addToArray(entity.APDRiskCovPricing.EXPOSUREPRICES_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.APDRiskCovPricing> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.APDExposurePriceVersionList> getExposurePrices() {
    return (java.util.List)getArray(entity.APDRiskCovPricing.EXPOSUREPRICES_PROP.get());
  }
  
  
}