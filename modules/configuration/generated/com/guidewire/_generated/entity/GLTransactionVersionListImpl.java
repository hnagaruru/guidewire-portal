package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GLTransaction.eti;GLTransaction.eix;GLTransaction.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GLTransactionVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GLTransactionVersionList {
  public GLTransactionVersionListImpl(entity.GLTransaction base)  {
    super(base);
  }
  
  public GLTransactionVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GLTransaction AsOf(java.util.Date date) {
    return (entity.GLTransaction)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GLTransaction> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}