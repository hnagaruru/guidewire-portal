package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BAStateExcl.eti;BAStateExcl.eix;BAStateExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class BAStateExclVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.BAStateExclVersionList {
  public BAStateExclVersionListImpl(entity.BAStateExcl base)  {
    super(base);
  }
  
  public BAStateExclVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.BAStateExcl AsOf(java.util.Date date) {
    return (entity.BAStateExcl)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BAStateExcl> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}