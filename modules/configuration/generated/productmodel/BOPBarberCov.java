package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPBarberCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPBarberCov extends entity.BusinessOwnersCov {
  protected BOPBarberCov()  {
    super((java.lang.Void)null);
  }
  
  public BOPBarberCov(entity.PolicyPeriod branch)  {
    super(branch, "BOPBarberCov");
  }
  
  public BOPBarberCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPBarberCov");
  }
  
  public productmodel.DirectBOPBarberBeautNumType getBOPBarberBeautNumTerm() {
    return (productmodel.DirectBOPBarberBeautNumType)getCovTerm("BOPBarberBeautNum");
  }
  
  public boolean getHasBOPBarberBeautNumTerm() {
    return hasCovTerm("BOPBarberBeautNum");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPBarberCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPBarberCov>() {
      public productmodel.BOPBarberCov newEmptyInstance() {
        return new productmodel.BOPBarberCov();
      }
      
      
    });
  }
}