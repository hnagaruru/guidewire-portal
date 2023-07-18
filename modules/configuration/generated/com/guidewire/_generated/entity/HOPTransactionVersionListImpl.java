package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPTransaction.eti;HOPTransaction.eix;HOPTransaction.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class HOPTransactionVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.HOPTransactionVersionList {
  public HOPTransactionVersionListImpl(entity.HOPTransaction base)  {
    super(base);
  }
  
  public HOPTransactionVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.HOPTransaction AsOf(java.util.Date date) {
    return (entity.HOPTransaction)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPTransaction> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}