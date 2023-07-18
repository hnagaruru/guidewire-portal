package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/CAPIP_HI.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class PackageWageLossTypeImpl extends com.guidewire.pc.api.domain.covterm.PackageCovTermInternal<productmodel.PackageWageLossType> implements productmodel.PackageWageLossType {
  public PackageWageLossTypeImpl(gw.api.productmodel.PackageCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.CAPIP_HI getCAPIP_HI() {
    return (productmodel.CAPIP_HI)getClause();
  }
  
  @java.lang.Override
  public productmodel.CAPIP_HI getCoverage() {
    return (productmodel.CAPIP_HI)getClause();
  }
  
  
}