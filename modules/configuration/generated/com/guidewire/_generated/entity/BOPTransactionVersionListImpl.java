package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BOPTransaction.eti;BOPTransaction.eix;BOPTransaction.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class BOPTransactionVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.BOPTransactionVersionList {
  public BOPTransactionVersionListImpl(entity.BOPTransaction base)  {
    super(base);
  }
  
  public BOPTransactionVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.BOPTransaction AsOf(java.util.Date date) {
    return (entity.BOPTransaction)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BOPTransaction> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}