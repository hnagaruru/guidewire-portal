package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WCRateFactor.eti;WCRateFactor.eix;WCRateFactor.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class WCRateFactorVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.WCRateFactorVersionList {
  public WCRateFactorVersionListImpl(entity.WCRateFactor base)  {
    super(base);
  }
  
  public WCRateFactorVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.WCRateFactor AsOf(java.util.Date date) {
    return (entity.WCRateFactor)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.WCRateFactor> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}