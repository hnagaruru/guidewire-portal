package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPCovPartSchExclItemExcl.eti;HOPCovPartSchExclItemExcl.eix;HOPCovPartSchExclItemExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class HOPCovPartSchExclItemExclVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.HOPCovPartSchExclItemExclVersionList {
  public HOPCovPartSchExclItemExclVersionListImpl(entity.HOPCovPartSchExclItemExcl base)  {
    super(base);
  }
  
  public HOPCovPartSchExclItemExclVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.HOPCovPartSchExclItemExcl AsOf(java.util.Date date) {
    return (entity.HOPCovPartSchExclItemExcl)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPCovPartSchExclItemExcl> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}