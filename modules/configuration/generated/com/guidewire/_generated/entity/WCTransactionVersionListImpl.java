package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WCTransaction.eti;WCTransaction.eix;WCTransaction.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class WCTransactionVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.WCTransactionVersionList {
  public WCTransactionVersionListImpl(entity.WCTransaction base)  {
    super(base);
  }
  
  public WCTransactionVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.WCTransaction AsOf(java.util.Date date) {
    return (entity.WCTransaction)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.WCTransaction> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}