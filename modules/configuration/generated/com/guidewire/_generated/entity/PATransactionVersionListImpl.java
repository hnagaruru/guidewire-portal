package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PATransaction.eti;PATransaction.eix;PATransaction.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class PATransactionVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.PATransactionVersionList {
  public PATransactionVersionListImpl(entity.PATransaction base)  {
    super(base);
  }
  
  public PATransactionVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.PATransaction AsOf(java.util.Date date) {
    return (entity.PATransaction)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PATransaction> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}