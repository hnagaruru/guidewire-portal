package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/IMLine/coveragepatterns/ContractorsEquipSchedCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionContractorsEquipSchedCovDeductibleTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionContractorsEquipSchedCovDeductibleType> implements productmodel.OptionContractorsEquipSchedCovDeductibleType {
  public OptionContractorsEquipSchedCovDeductibleTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
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