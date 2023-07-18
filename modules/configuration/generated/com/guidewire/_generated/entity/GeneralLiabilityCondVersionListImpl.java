package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GeneralLiabilityCond.eti;GeneralLiabilityCond.eix;GeneralLiabilityCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GeneralLiabilityCondVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GeneralLiabilityCondVersionList {
  public GeneralLiabilityCondVersionListImpl(entity.GeneralLiabilityCond base)  {
    super(base);
  }
  
  public GeneralLiabilityCondVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GeneralLiabilityCond AsOf(java.util.Date date) {
    return (entity.GeneralLiabilityCond)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GeneralLiabilityCond> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}