package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPEmpBenefits.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPEmpBenefits extends entity.BusinessOwnersCov {
  protected BOPEmpBenefits()  {
    super((java.lang.Void)null);
  }
  
  public BOPEmpBenefits(entity.PolicyPeriod branch)  {
    super(branch, "BOPEmpBenefits");
  }
  
  public BOPEmpBenefits(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPEmpBenefits");
  }
  
  public productmodel.DirectBOPEmpBenAggLimType getBOPEmpBenAggLimTerm() {
    return (productmodel.DirectBOPEmpBenAggLimType)getCovTerm("BOPEmpBenAggLim");
  }
  
  public productmodel.OptionBOPEmpBenEachEmpDedType getBOPEmpBenEachEmpDedTerm() {
    return (productmodel.OptionBOPEmpBenEachEmpDedType)getCovTerm("BOPEmpBenEachEmpDed");
  }
  
  public productmodel.DirectBOPEmpBenEachEmpLimType getBOPEmpBenEachEmpLimTerm() {
    return (productmodel.DirectBOPEmpBenEachEmpLimType)getCovTerm("BOPEmpBenEachEmpLim");
  }
  
  public productmodel.GenericBOPEmpBenRetroDateType getBOPEmpBenRetroDateTerm() {
    return (productmodel.GenericBOPEmpBenRetroDateType)getCovTerm("BOPEmpBenRetroDate");
  }
  
  public boolean getHasBOPEmpBenAggLimTerm() {
    return hasCovTerm("BOPEmpBenAggLim");
  }
  
  public boolean getHasBOPEmpBenEachEmpDedTerm() {
    return hasCovTerm("BOPEmpBenEachEmpDed");
  }
  
  public boolean getHasBOPEmpBenEachEmpLimTerm() {
    return hasCovTerm("BOPEmpBenEachEmpLim");
  }
  
  public boolean getHasBOPEmpBenRetroDateTerm() {
    return hasCovTerm("BOPEmpBenRetroDate");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPEmpBenefitsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPEmpBenefits>() {
      public productmodel.BOPEmpBenefits newEmptyInstance() {
        return new productmodel.BOPEmpBenefits();
      }
      
      
    });
  }
}