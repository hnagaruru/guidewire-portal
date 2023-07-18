package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BOPModifier.eti;BOPModifier.eix;BOPModifier.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class BOPModifierVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.BOPModifierVersionList {
  public BOPModifierVersionListImpl(entity.BOPModifier base)  {
    super(base);
  }
  
  public BOPModifierVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.BOPModifier AsOf(java.util.Date date) {
    return (entity.BOPModifier)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BOPRateFactor> BOPRateFactorsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.BOPModifier.BOPRATEFACTORS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToBOPRateFactors(entity.BOPRateFactor bean) {
    addToArray(entity.BOPModifier.BOPRATEFACTORS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BOPModifier> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.BOPRateFactorVersionList> getBOPRateFactors() {
    return (java.util.List)getArray(entity.BOPModifier.BOPRATEFACTORS_PROP.get());
  }
  
  
}