package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPLineExcl.eti;HOPLineExcl.eix;HOPLineExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class HOPLineExclVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.HOPLineExclVersionList {
  public HOPLineExclVersionListImpl(entity.HOPLineExcl base)  {
    super(base);
  }
  
  public HOPLineExclVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.HOPLineExcl AsOf(java.util.Date date) {
    return (entity.HOPLineExcl)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPLineExcl> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}