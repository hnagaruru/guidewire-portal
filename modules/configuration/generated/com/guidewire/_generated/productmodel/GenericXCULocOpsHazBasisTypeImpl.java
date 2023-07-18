package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/XCUSpecified.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericXCULocOpsHazBasisTypeImpl extends com.guidewire.pc.api.domain.covterm.StringCovTermInternal implements productmodel.GenericXCULocOpsHazBasisType {
  public GenericXCULocOpsHazBasisTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.XCUSpecified getCoverage() {
    return (productmodel.XCUSpecified)getClause();
  }
  
  @java.lang.Override
  public productmodel.XCUSpecified getXCUSpecified() {
    return (productmodel.XCUSpecified)getClause();
  }
  
  
}