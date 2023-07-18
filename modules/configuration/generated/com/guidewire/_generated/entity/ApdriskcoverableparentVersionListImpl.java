package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Apdriskcoverableparent.eti;Apdriskcoverableparent.eix;Apdriskcoverableparent.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class ApdriskcoverableparentVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.ApdriskcoverableparentVersionList {
  public ApdriskcoverableparentVersionListImpl(entity.Apdriskcoverableparent base)  {
    super(base);
  }
  
  public ApdriskcoverableparentVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.Apdriskcoverableparent AsOf(java.util.Date date) {
    return (entity.Apdriskcoverableparent)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.Apdriskcoverableparent> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}