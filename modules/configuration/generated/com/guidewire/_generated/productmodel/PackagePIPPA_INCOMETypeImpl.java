package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/CAPIP_PA.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class PackagePIPPA_INCOMETypeImpl extends com.guidewire.pc.api.domain.covterm.PackageCovTermInternal<productmodel.PackagePIPPA_INCOMEType> implements productmodel.PackagePIPPA_INCOMEType {
  public PackagePIPPA_INCOMETypeImpl(gw.api.productmodel.PackageCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.CAPIP_PA getCAPIP_PA() {
    return (productmodel.CAPIP_PA)getClause();
  }
  
  @java.lang.Override
  public productmodel.CAPIP_PA getCoverage() {
    return (productmodel.CAPIP_PA)getClause();
  }
  
  
}