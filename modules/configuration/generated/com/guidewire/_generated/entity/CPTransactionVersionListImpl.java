package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CPTransaction.eti;CPTransaction.eix;CPTransaction.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class CPTransactionVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.CPTransactionVersionList {
  public CPTransactionVersionListImpl(entity.CPTransaction base)  {
    super(base);
  }
  
  public CPTransactionVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.CPTransaction AsOf(java.util.Date date) {
    return (entity.CPTransaction)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.CPTransaction> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}