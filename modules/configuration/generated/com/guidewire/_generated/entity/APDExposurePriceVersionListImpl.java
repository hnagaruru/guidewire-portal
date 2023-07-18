package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDExposurePrice.eti;APDExposurePrice.eix;APDExposurePrice.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class APDExposurePriceVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.APDExposurePriceVersionList {
  public APDExposurePriceVersionListImpl(entity.APDExposurePrice base)  {
    super(base);
  }
  
  public APDExposurePriceVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.APDExposurePrice AsOf(java.util.Date date) {
    return (entity.APDExposurePrice)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.APDExposurePrice> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}