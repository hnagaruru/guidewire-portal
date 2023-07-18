package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPCoveragePartExcl.eti;HOPCoveragePartExcl.eix;HOPCoveragePartExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class HOPCoveragePartExclVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.HOPCoveragePartExclVersionList {
  public HOPCoveragePartExclVersionListImpl(entity.HOPCoveragePartExcl base)  {
    super(base);
  }
  
  public HOPCoveragePartExclVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.HOPCoveragePartExcl AsOf(java.util.Date date) {
    return (entity.HOPCoveragePartExcl)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPCoveragePartExcl> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}