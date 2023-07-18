package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BAHiredCollisionCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BAHiredCollisionCov extends entity.BusinessAutoCov {
  protected BAHiredCollisionCov()  {
    super((java.lang.Void)null);
  }
  
  public BAHiredCollisionCov(entity.PolicyPeriod branch)  {
    super(branch, "BAHiredCollisionCov");
  }
  
  public BAHiredCollisionCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BAHiredCollisionCov");
  }
  
  public productmodel.OptionBAHiredCollDeductType getBAHiredCollDeductTerm() {
    return (productmodel.OptionBAHiredCollDeductType)getCovTerm("BAHiredCollDeduct");
  }
  
  public boolean getHasBAHiredCollDeductTerm() {
    return hasCovTerm("BAHiredCollDeduct");
  }
  
  static {
    com.guidewire._generated.productmodel.BAHiredCollisionCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BAHiredCollisionCov>() {
      public productmodel.BAHiredCollisionCov newEmptyInstance() {
        return new productmodel.BAHiredCollisionCov();
      }
      
      
    });
  }
}