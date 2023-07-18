package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BAJurisRateFactor.eti;BAJurisRateFactor.eix;BAJurisRateFactor.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class BAJurisRateFactorVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.BAJurisRateFactorVersionList {
  public BAJurisRateFactorVersionListImpl(entity.BAJurisRateFactor base)  {
    super(base);
  }
  
  public BAJurisRateFactorVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.BAJurisRateFactor AsOf(java.util.Date date) {
    return (entity.BAJurisRateFactor)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BAJurisRateFactor> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}