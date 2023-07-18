package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WCModifier.eti;WCModifier.eix;WCModifier.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class WCModifierVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.WCModifierVersionList {
  public WCModifierVersionListImpl(entity.WCModifier base)  {
    super(base);
  }
  
  public WCModifierVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.WCModifier AsOf(java.util.Date date) {
    return (entity.WCModifier)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.WCRateFactor> WCRateFactorsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.WCModifier.WCRATEFACTORS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToWCRateFactors(entity.WCRateFactor bean) {
    addToArray(entity.WCModifier.WCRATEFACTORS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.WCModifier> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.WCRateFactorVersionList> getWCRateFactors() {
    return (java.util.List)getArray(entity.WCModifier.WCRATEFACTORS_PROP.get());
  }
  
  
}