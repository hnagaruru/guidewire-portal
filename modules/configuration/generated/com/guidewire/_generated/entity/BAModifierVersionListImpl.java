package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BAModifier.eti;BAModifier.eix;BAModifier.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class BAModifierVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.BAModifierVersionList {
  public BAModifierVersionListImpl(entity.BAModifier base)  {
    super(base);
  }
  
  public BAModifierVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.BAModifier AsOf(java.util.Date date) {
    return (entity.BAModifier)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BARateFactor> BARateFactorsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.BAModifier.BARATEFACTORS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToBARateFactors(entity.BARateFactor bean) {
    addToArray(entity.BAModifier.BARATEFACTORS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BAModifier> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.BARateFactorVersionList> getBARateFactors() {
    return (java.util.List)getArray(entity.BAModifier.BARATEFACTORS_PROP.get());
  }
  
  
}