package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PAModifier.eti;PAModifier.eix;PAModifier.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class PAModifierVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.PAModifierVersionList {
  public PAModifierVersionListImpl(entity.PAModifier base)  {
    super(base);
  }
  
  public PAModifierVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.PAModifier AsOf(java.util.Date date) {
    return (entity.PAModifier)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PARateFactor> PARateFactorsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.PAModifier.PARATEFACTORS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToPARateFactors(entity.PARateFactor bean) {
    addToArray(entity.PAModifier.PARATEFACTORS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PAModifier> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.PARateFactorVersionList> getPARateFactors() {
    return (java.util.List)getArray(entity.PAModifier.PARATEFACTORS_PROP.get());
  }
  
  
}