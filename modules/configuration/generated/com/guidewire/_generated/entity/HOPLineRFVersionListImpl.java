package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPLineRF.eti;HOPLineRF.eix;HOPLineRF.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class HOPLineRFVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.HOPLineRFVersionList {
  public HOPLineRFVersionListImpl(entity.HOPLineRF base)  {
    super(base);
  }
  
  public HOPLineRFVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.HOPLineRF AsOf(java.util.Date date) {
    return (entity.HOPLineRF)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPLineRF> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}