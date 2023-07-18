package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WorkersCompExcl.eti;WorkersCompExcl.eix;WorkersCompExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class WorkersCompExclVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.WorkersCompExclVersionList {
  public WorkersCompExclVersionListImpl(entity.WorkersCompExcl base)  {
    super(base);
  }
  
  public WorkersCompExclVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.WorkersCompExcl AsOf(java.util.Date date) {
    return (entity.WorkersCompExcl)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.WorkersCompExcl> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}