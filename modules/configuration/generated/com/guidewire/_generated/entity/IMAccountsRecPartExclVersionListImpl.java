package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "IMAccountsRecPartExcl.eti;IMAccountsRecPartExcl.eix;IMAccountsRecPartExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class IMAccountsRecPartExclVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.IMAccountsRecPartExclVersionList {
  public IMAccountsRecPartExclVersionListImpl(entity.IMAccountsRecPartExcl base)  {
    super(base);
  }
  
  public IMAccountsRecPartExclVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.IMAccountsRecPartExcl AsOf(java.util.Date date) {
    return (entity.IMAccountsRecPartExcl)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.IMAccountsRecPartExcl> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}