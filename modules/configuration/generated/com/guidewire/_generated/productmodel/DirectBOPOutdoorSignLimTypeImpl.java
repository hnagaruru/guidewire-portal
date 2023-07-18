package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPOutSignCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class DirectBOPOutdoorSignLimTypeImpl extends com.guidewire.pc.api.domain.covterm.DirectCovTermInternal implements productmodel.DirectBOPOutdoorSignLimType {
  public DirectBOPOutdoorSignLimTypeImpl(gw.api.productmodel.DirectCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BOPOutSignCov getBOPOutSignCov() {
    return (productmodel.BOPOutSignCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BOPOutSignCov getCoverage() {
    return (productmodel.BOPOutSignCov)getClause();
  }
  
  
}