package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "IMTransaction.eti;IMTransaction.eix;IMTransaction.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class IMTransactionVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.IMTransactionVersionList {
  public IMTransactionVersionListImpl(entity.IMTransaction base)  {
    super(base);
  }
  
  public IMTransactionVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.IMTransaction AsOf(java.util.Date date) {
    return (entity.IMTransaction)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.IMTransaction> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}