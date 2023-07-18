package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPElectricalSchedCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class DirectBOPElectricalSchedLimitTypeImpl extends com.guidewire.pc.api.domain.covterm.DirectCovTermInternal implements productmodel.DirectBOPElectricalSchedLimitType {
  public DirectBOPElectricalSchedLimitTypeImpl(gw.api.productmodel.DirectCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BOPElectricalSchedCov getBOPElectricalSchedCov() {
    return (productmodel.BOPElectricalSchedCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BOPElectricalSchedCov getCoverage() {
    return (productmodel.BOPElectricalSchedCov)getClause();
  }
  
  
}