package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "AddlInterestDetail.eti;AddlInterestDetail.eix;AddlInterestDetail.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class AddlInterestDetailVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.AddlInterestDetailVersionList {
  public AddlInterestDetailVersionListImpl(entity.AddlInterestDetail base)  {
    super(base);
  }
  
  public AddlInterestDetailVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.AddlInterestDetail AsOf(java.util.Date date) {
    return (entity.AddlInterestDetail)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.AddlInterestDetail> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}