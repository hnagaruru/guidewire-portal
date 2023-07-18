package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CPModifier.eti;CPModifier.eix;CPModifier.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class CPModifierVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.CPModifierVersionList {
  public CPModifierVersionListImpl(entity.CPModifier base)  {
    super(base);
  }
  
  public CPModifierVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.CPModifier AsOf(java.util.Date date) {
    return (entity.CPModifier)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.CPRateFactor> CPRateFactorsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.CPModifier.CPRATEFACTORS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToCPRateFactors(entity.CPRateFactor bean) {
    addToArray(entity.CPModifier.CPRATEFACTORS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.CPModifier> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.CPRateFactorVersionList> getCPRateFactors() {
    return (java.util.List)getArray(entity.CPModifier.CPRATEFACTORS_PROP.get());
  }
  
  
}