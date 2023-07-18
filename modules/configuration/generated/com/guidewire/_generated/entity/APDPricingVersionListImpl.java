package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDPricing.eti;APDPricing.eix;APDPricing.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class APDPricingVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.APDPricingVersionList {
  public APDPricingVersionListImpl(entity.APDPricing base)  {
    super(base);
  }
  
  public APDPricingVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.APDPricing AsOf(java.util.Date date) {
    return (entity.APDPricing)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.APDPricing> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}