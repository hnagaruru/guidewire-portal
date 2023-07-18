package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BADOCCollisionCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BADOCCollisionCov extends entity.BusinessAutoCov {
  protected BADOCCollisionCov()  {
    super((java.lang.Void)null);
  }
  
  public BADOCCollisionCov(entity.PolicyPeriod branch)  {
    super(branch, "BADOCCollisionCov");
  }
  
  public BADOCCollisionCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BADOCCollisionCov");
  }
  
  public productmodel.OptionBADOCCollisionDeductType getBADOCCollisionDeductTerm() {
    return (productmodel.OptionBADOCCollisionDeductType)getCovTerm("BADOCCollisionDeduct");
  }
  
  public boolean getHasBADOCCollisionDeductTerm() {
    return hasCovTerm("BADOCCollisionDeduct");
  }
  
  static {
    com.guidewire._generated.productmodel.BADOCCollisionCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BADOCCollisionCov>() {
      public productmodel.BADOCCollisionCov newEmptyInstance() {
        return new productmodel.BADOCCollisionCov();
      }
      
      
    });
  }
}