package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPEarthquake.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPEarthquake extends entity.HOPDwellingCov {
  protected HOPEarthquake()  {
    super((java.lang.Void)null);
  }
  
  public HOPEarthquake(entity.PolicyPeriod branch)  {
    super(branch, "zr4gsjbrvihdr6ktd06s5kc87n9");
  }
  
  public HOPEarthquake(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "zr4gsjbrvihdr6ktd06s5kc87n9");
  }
  
  public productmodel.OptionHOPEarthquakeDeductibleType getHOPEarthquakeDeductibleTerm() {
    return (productmodel.OptionHOPEarthquakeDeductibleType)getCovTerm("z4phqb5m98p7o8f4f64bindbge8");
  }
  
  public productmodel.GenericHOPEarthquakeMasonryExclType getHOPEarthquakeMasonryExclTerm() {
    return (productmodel.GenericHOPEarthquakeMasonryExclType)getCovTerm("zhvha9tspf14tdtoms11pena158");
  }
  
  public boolean getHasHOPEarthquakeDeductibleTerm() {
    return hasCovTerm("z4phqb5m98p7o8f4f64bindbge8");
  }
  
  public boolean getHasHOPEarthquakeMasonryExclTerm() {
    return hasCovTerm("zhvha9tspf14tdtoms11pena158");
  }
  
  static {
    com.guidewire._generated.productmodel.HOPEarthquakeInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPEarthquake>() {
      public productmodel.HOPEarthquake newEmptyInstance() {
        return new productmodel.HOPEarthquake();
      }
      
      
    });
  }
}