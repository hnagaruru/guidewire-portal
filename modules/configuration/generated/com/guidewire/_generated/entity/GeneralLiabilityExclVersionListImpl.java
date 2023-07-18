package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GeneralLiabilityExcl.eti;GeneralLiabilityExcl.eix;GeneralLiabilityExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GeneralLiabilityExclVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GeneralLiabilityExclVersionList {
  public GeneralLiabilityExclVersionListImpl(entity.GeneralLiabilityExcl base)  {
    super(base);
  }
  
  public GeneralLiabilityExclVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GeneralLiabilityExcl AsOf(java.util.Date date) {
    return (entity.GeneralLiabilityExcl)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GeneralLiabilityExcl> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}