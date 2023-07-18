package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BusinessAutoExcl.eti;BusinessAutoExcl.eix;BusinessAutoExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class BusinessAutoExclVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.BusinessAutoExclVersionList {
  public BusinessAutoExclVersionListImpl(entity.BusinessAutoExcl base)  {
    super(base);
  }
  
  public BusinessAutoExclVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.BusinessAutoExcl AsOf(java.util.Date date) {
    return (entity.BusinessAutoExcl)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BusinessAutoExcl> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}