package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/IMLine/coveragepatterns/ContractorsEquipRentalReibursement.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class DirectContractorsEquipRentalPolicyLimitTypeImpl extends com.guidewire.pc.api.domain.covterm.DirectCovTermInternal implements productmodel.DirectContractorsEquipRentalPolicyLimitType {
  public DirectContractorsEquipRentalPolicyLimitTypeImpl(gw.api.productmodel.DirectCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.ContractorsEquipRentalReibursement getContractorsEquipRentalReibursement() {
    return (productmodel.ContractorsEquipRentalReibursement)getClause();
  }
  
  @java.lang.Override
  public productmodel.ContractorsEquipRentalReibursement getCoverage() {
    return (productmodel.ContractorsEquipRentalReibursement)getClause();
  }
  
  
}