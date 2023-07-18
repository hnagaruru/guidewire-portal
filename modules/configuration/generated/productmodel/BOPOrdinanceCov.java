package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPOrdinanceCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPOrdinanceCov extends entity.BOPBuildingCov {
  protected BOPOrdinanceCov()  {
    super((java.lang.Void)null);
  }
  
  public BOPOrdinanceCov(entity.PolicyPeriod branch)  {
    super(branch, "BOPOrdinanceCov");
  }
  
  public BOPOrdinanceCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPOrdinanceCov");
  }
  
  public productmodel.GenericBOPOrdLawCov1yesnoType getBOPOrdLawCov1yesnoTerm() {
    return (productmodel.GenericBOPOrdLawCov1yesnoType)getCovTerm("BOPOrdLawCov1yesno");
  }
  
  public productmodel.DirectBOPOrdLawCov23LimType getBOPOrdLawCov23LimTerm() {
    return (productmodel.DirectBOPOrdLawCov23LimType)getCovTerm("BOPOrdLawCov23Lim");
  }
  
  public productmodel.DirectBOPOrdLawCov2LimType getBOPOrdLawCov2LimTerm() {
    return (productmodel.DirectBOPOrdLawCov2LimType)getCovTerm("BOPOrdLawCov2Lim");
  }
  
  public productmodel.DirectBOPOrdLawCov3LimType getBOPOrdLawCov3LimTerm() {
    return (productmodel.DirectBOPOrdLawCov3LimType)getCovTerm("BOPOrdLawCov3Lim");
  }
  
  public productmodel.OptionBOPOrdLawIncomeExpenseDeductType getBOPOrdLawIncomeExpenseDeductTerm() {
    return (productmodel.OptionBOPOrdLawIncomeExpenseDeductType)getCovTerm("BOPOrdLawIncomeExpenseDeduct");
  }
  
  public productmodel.GenericBOPOrdLawIncomeExpenseType getBOPOrdLawIncomeExpenseTerm() {
    return (productmodel.GenericBOPOrdLawIncomeExpenseType)getCovTerm("BOPOrdLawIncomeExpense");
  }
  
  public boolean getHasBOPOrdLawCov1yesnoTerm() {
    return hasCovTerm("BOPOrdLawCov1yesno");
  }
  
  public boolean getHasBOPOrdLawCov23LimTerm() {
    return hasCovTerm("BOPOrdLawCov23Lim");
  }
  
  public boolean getHasBOPOrdLawCov2LimTerm() {
    return hasCovTerm("BOPOrdLawCov2Lim");
  }
  
  public boolean getHasBOPOrdLawCov3LimTerm() {
    return hasCovTerm("BOPOrdLawCov3Lim");
  }
  
  public boolean getHasBOPOrdLawIncomeExpenseDeductTerm() {
    return hasCovTerm("BOPOrdLawIncomeExpenseDeduct");
  }
  
  public boolean getHasBOPOrdLawIncomeExpenseTerm() {
    return hasCovTerm("BOPOrdLawIncomeExpense");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPOrdinanceCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPOrdinanceCov>() {
      public productmodel.BOPOrdinanceCov newEmptyInstance() {
        return new productmodel.BOPOrdinanceCov();
      }
      
      
    });
  }
}