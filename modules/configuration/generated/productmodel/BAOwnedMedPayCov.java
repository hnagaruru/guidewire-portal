package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BAOwnedMedPayCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BAOwnedMedPayCov extends entity.BusinessAutoCov {
  protected BAOwnedMedPayCov()  {
    super((java.lang.Void)null);
  }
  
  public BAOwnedMedPayCov(entity.PolicyPeriod branch)  {
    super(branch, "BAOwnedMedPayCov");
  }
  
  public BAOwnedMedPayCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BAOwnedMedPayCov");
  }
  
  public productmodel.GenericBAOwnedMedPayCoordinateType getBAOwnedMedPayCoordinateTerm() {
    return (productmodel.GenericBAOwnedMedPayCoordinateType)getCovTerm("BAOwnedMedPayCoordinate");
  }
  
  public productmodel.OptionBAOwnedMedPayLimitType getBAOwnedMedPayLimitTerm() {
    return (productmodel.OptionBAOwnedMedPayLimitType)getCovTerm("BAOwnedMedPayLimit");
  }
  
  public boolean getHasBAOwnedMedPayCoordinateTerm() {
    return hasCovTerm("BAOwnedMedPayCoordinate");
  }
  
  public boolean getHasBAOwnedMedPayLimitTerm() {
    return hasCovTerm("BAOwnedMedPayLimit");
  }
  
  static {
    com.guidewire._generated.productmodel.BAOwnedMedPayCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BAOwnedMedPayCov>() {
      public productmodel.BAOwnedMedPayCov newEmptyInstance() {
        return new productmodel.BAOwnedMedPayCov();
      }
      
      
    });
  }
}