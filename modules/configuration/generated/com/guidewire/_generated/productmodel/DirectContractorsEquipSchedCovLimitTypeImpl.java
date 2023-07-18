package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/IMLine/coveragepatterns/ContractorsEquipSchedCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class DirectContractorsEquipSchedCovLimitTypeImpl extends com.guidewire.pc.api.domain.covterm.DirectCovTermInternal implements productmodel.DirectContractorsEquipSchedCovLimitType {
  public DirectContractorsEquipSchedCovLimitTypeImpl(gw.api.productmodel.DirectCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.ContractorsEquipSchedCov getContractorsEquipSchedCov() {
    return (productmodel.ContractorsEquipSchedCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.ContractorsEquipSchedCov getCoverage() {
    return (productmodel.ContractorsEquipSchedCov)getClause();
  }
  
  
}